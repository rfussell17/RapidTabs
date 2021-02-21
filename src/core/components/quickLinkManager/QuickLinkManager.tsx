import { Button, Container, IconButton, Modal, Paper, TextField, Typography } from '@material-ui/core';
import { Add, DeleteForever, KeyboardArrowDown, KeyboardBackspace, Clear } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { Dictionary, QuickLink } from '../../Types';
import { NumericSpacer } from '../Spacers';
import { makeQuickLinkManagerStyle } from './Style';

interface Props {
  isOpen: boolean;
  addQuickLink: (name: string, urlList: string[]) => void;
  removeQuickLink: (item: QuickLink) => void;
  editQuickLink: (item: QuickLink) => void;
  closeModal: () => void;
  incomingQuickLink: QuickLink | null;
}
export const QuickLinkManager = (props: Props) => {
  const [bottomScrollRef] = useState(useRef<null | HTMLDivElement>(null));
  const [hasError, setHasError] = useState(false);
  const [newUrl, setNewUrl] = useState<string>('');
  const [isNotValidUrl, setIsNotValidUrl] = useState<Dictionary<boolean>>({});
  const [quickLink, setQuickLink] = useState<QuickLink>({ key: '', name: '', urlList: [] });

  useEffect(() => {
    setQuickLink(props.incomingQuickLink?.key ? { ...props.incomingQuickLink } : { key: '', name: '', urlList: [] });
  }, [props.incomingQuickLink]);

  useEffect(() => {
    const errorList: boolean[] = [];

    Object.values(isNotValidUrl).forEach((value) => {
      if (!!value) {
        errorList.push(value);
      }
    });

    setHasError(errorList.length > 0);
  }, [isNotValidUrl]);

  const style = makeQuickLinkManagerStyle();

  const handleEditUrl = (text: string, index: number | undefined, isNew?: boolean) => {
    const isValid = validateURL(text);
    const copyIsNotValid = { ...isNotValidUrl };
    if (isNew) {
      setNewUrl(text);
      copyIsNotValid['new'] = !isValid;
      setIsNotValidUrl(copyIsNotValid);
    }

    if (index != undefined) {
      const copyList = [...quickLink.urlList];
      copyList[index] = text;
      setQuickLink({ ...quickLink, urlList: copyList });
      copyIsNotValid[index] = !isValid;
      setIsNotValidUrl(copyIsNotValid);
    }
  };

  const scrollToBottom = () => {
    bottomScrollRef.current?.scrollIntoView();
  };

  useEffect(() => {
    if (bottomScrollRef !== null) {
      scrollToBottom();
    }
  }, []);

  const resetState = () => {
    setIsNotValidUrl({});
    setNewUrl('');
    setQuickLink(props.incomingQuickLink || { key: '', name: '', urlList: [] });
  };

  const handleCancel = () => {
    resetState();
    props.closeModal();
  };

  const handleDeleteQuickLink = () => {
    resetState();
    props.removeQuickLink(quickLink);
    props.closeModal();
  };

  const handleRemoveURLFromList = (index: number) => {
    const copyList = [...quickLink.urlList];
    copyList.splice(index, 1);
    setQuickLink({ ...quickLink, urlList: copyList });

    const copyisNotValidUrl = { ...isNotValidUrl };
    delete copyisNotValidUrl[index];

    Object.keys(copyisNotValidUrl).forEach((key) => {
      if (key !== 'new' && Number(key) > index) {
        copyisNotValidUrl[Number(key) - 1] = copyisNotValidUrl[key];
        delete copyisNotValidUrl[key];
      }
    });

    setIsNotValidUrl(copyisNotValidUrl);
  };

  const handleSubmit = () => {
    const newUrlList = newUrl !== '' ? [...quickLink.urlList, newUrl] : quickLink.urlList;

    if (props.incomingQuickLink) {
      props.editQuickLink({ ...quickLink, urlList: newUrlList });
    } else {
      props.addQuickLink(quickLink.name, newUrlList);
    }

    resetState();
  };

  const validateURL = (text: string) => {
    const pattern = new RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    );
    return !!pattern.test(text);
  };

  return (
    <Container className={style.container}>
      <Modal disableAutoFocus={true} style={{ outline: 'none' }} open={props.isOpen}>
        <div className={style.container}>
          <Paper className={style.paperContainer}>
            <div className={props.incomingQuickLink ? style.headerEdit : style.headerCreate}>
              <IconButton onClick={handleCancel}>
                <KeyboardBackspace />
              </IconButton>
              <Typography variant={'h4'}>{props.incomingQuickLink ? 'Edit' : 'Create'} Quick Link</Typography>
              {props.incomingQuickLink ? (
                <IconButton onClick={handleDeleteQuickLink}>
                  <DeleteForever />
                </IconButton>
              ) : null}
            </div>
            <NumericSpacer size={20} />
            <Container className={style.body}>
              <TextField
                label="name"
                className={style.textField}
                value={quickLink.name}
                onChange={(e) => {
                  setQuickLink({ ...quickLink, name: e.currentTarget.value });
                }}
              />
              {quickLink.urlList.map((url: string, index: number) => (
                <TextField
                  key={index}
                  className={style.textField}
                  label="url"
                  value={url}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => handleRemoveURLFromList(index)}>
                        <Clear />
                      </IconButton>
                    ),
                  }}
                  error={isNotValidUrl[index]}
                  helperText={isNotValidUrl[index] ? 'Invalid URL' : null}
                  onChange={(e) => {
                    handleEditUrl(e.currentTarget.value, index);
                  }}
                />
              ))}
              <TextField
                label="url"
                value={newUrl}
                className={style.textField}
                error={isNotValidUrl['new']}
                helperText={isNotValidUrl['new'] ? 'Invalid URL' : null}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => {
                        if (newUrl !== '') {
                          setQuickLink({ ...quickLink, urlList: [...quickLink.urlList, newUrl] });
                          setNewUrl('');
                        }
                      }}
                    >
                      <Add />
                    </IconButton>
                  ),
                }}
                onChange={(e) => {
                  handleEditUrl(e.currentTarget.value, undefined, true);
                }}
              />
              <NumericSpacer size={10} />
              <div ref={bottomScrollRef} />
            </Container>
            <div className={style.buttonRow}>
              <Button color="secondary" onClick={handleCancel}>
                CANCEL
              </Button>
              <NumericSpacer size={20} />
              <Button color="primary" variant="contained" onClick={handleSubmit} disabled={hasError}>
                SAVE
              </Button>
            </div>
          </Paper>
          {quickLink.urlList.length >= 4 ? (
            <IconButton className={style.iconButton} onClick={scrollToBottom}>
              <KeyboardArrowDown className={style.icon} style={{ color: '#ffffff' }} />
            </IconButton>
          ) : null}
        </div>
      </Modal>
    </Container>
  );
};

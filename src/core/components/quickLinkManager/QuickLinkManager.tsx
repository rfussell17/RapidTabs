import { Button, Container, IconButton, Modal, Paper, TextField, Typography } from '@material-ui/core';
import { Add, DeleteForever, KeyboardArrowDown, KeyboardBackspace, Clear } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { Dictionary, QuickLink } from '../../Types';
import { NumericSpacer } from '../Spacers';
import { makeQuickLinkManagerStyle } from './Style';

interface Props {
  addQuickLink: (name: string, urlList: string[]) => void;
  removeQuickLink: (item: QuickLink) => void;
  editQuickLink: (item: QuickLink) => void;
  closeModal: () => void;
  incomingQuickLink: QuickLink | null;
}
export const QuickLinkManager = (props: Props) => {
  const [bottomScrollRef] = useState(useRef<null | HTMLDivElement>(null));
  const [newUrl, setNewUrl] = useState<string>('');
  const [isNotValidUrl, setIsNotValidUrl] = useState<Dictionary<boolean>>({});
  const [quickLink, setQuickLink] = useState<QuickLink>(props.incomingQuickLink || { key: '', name: '', urlList: [] });

  const style = makeQuickLinkManagerStyle();

  const handleEditUrl = (text: string, index: number | undefined, isNew?: boolean) => {
    const isValid = validateURL(text);
    const copyIsNotValid = { ...isNotValidUrl };
    if (isNew) {
      setNewUrl(text);
      copyIsNotValid['new'] = !isValid;
      setIsNotValidUrl(copyIsNotValid);
    }

    if (index) {
      console.log('HELLLooooooo');
      const copyList = [...quickLink.urlList];
      copyList[index] = text;
      setQuickLink({ ...quickLink, urlList: copyList });
      copyIsNotValid[index] = !isValid;
      setIsNotValidUrl(copyIsNotValid);
    }

    console.log('is not valid', isNotValidUrl);
  };

  const scrollToBottom = () => {
    bottomScrollRef.current?.scrollIntoView();
  };

  useEffect(() => {
    console.log(bottomScrollRef);
    if (bottomScrollRef !== null) {
      scrollToBottom();
    }
  }, []);

  const handleCancel = () => {
    console.log('CANCEL');
  };

  const handleSubmit = () => {
    if (props.incomingQuickLink) {
      props.editQuickLink({ ...quickLink });
    } else {
      props.addQuickLink(quickLink.name, [...quickLink.urlList, newUrl]);
    }
  };

  const validateURL = (text: string) => {
    const pattern = new RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    );
    return !!pattern.test(text);
  };

  return (
    <Container className={style.container}>
      <Modal disableAutoFocus={true} style={{ outline: 'none' }} open>
        <div className={style.container}>
          <Paper className={style.paperContainer}>
            <div className={style.header}>
              <IconButton>
                <KeyboardBackspace />
              </IconButton>
              <Typography variant={'h4'}>{props.incomingQuickLink ? 'Edit' : 'Create'} Quick Link</Typography>
              <IconButton>
                <DeleteForever />
              </IconButton>
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
                  key={url}
                  className={style.textField}
                  label="url"
                  value={url}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
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
                        // TODO: add validation
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
              <Button color="primary" variant="contained" onClick={handleSubmit}>
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

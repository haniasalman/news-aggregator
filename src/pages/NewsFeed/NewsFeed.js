import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArticlesCard from '../Articles/ArticlesCard';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchNytArticlesRequest } from '../../redux-store/NewYorkTimes/actions';
import { selectNytArticlesList } from '../../redux-store/selector';
import no_img from '../../assests/images/No_Image_Available.jpg';

const sections = [
  'Fashion',
  'Food',
  'Health',
  'Politics',
  'Travel',
  'Obituaries',
  'Opinion',
  'Realestate',
  'Insider',
  'Science',
  'Sports',
  'Technology',
  'Theater',
  'T-magazine',
  'Upshot',
  'US',
  'World',
];

const AutoGrid = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedSections, setSelectedSections] = useState(
    sections.reduce(
      (acc, section, index) => ({
        ...acc,
        [section]: index < 5, 
      }),
      {}
    )
  );

  const NytArticles = useSelector(selectNytArticlesList, shallowEqual);

  useEffect(() => {
    const selectedSectionKeys = Object.keys(selectedSections).filter(
      (section) => selectedSections[section]
    );
    if (selectedSectionKeys.length > 7) {
      const newSelectedSections = { ...selectedSections };
      selectedSectionKeys.slice(7).forEach((section) => {
        newSelectedSections[section] = false;
      });
      setSelectedSections(newSelectedSections);
    } else {
      selectedSectionKeys.forEach((section) => {
        dispatch(fetchNytArticlesRequest(section));
      });
    }
  }, [selectedSections]);

  const handleToggleSection = (section) => {
    setSelectedSections((prevSelectedSections) => ({
      ...prevSelectedSections,
      [section]: !prevSelectedSections[section],
    }));
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  let numGrids, numColumns;

  if (
    Object.values(selectedSections).filter((isSelected) => isSelected).length %
      3 ===
    0
  ) {
    numGrids =
      Object.values(selectedSections).filter((isSelected) => isSelected)
        .length / 3;
    numColumns = 3;
  } else if (
    Object.values(selectedSections).filter((isSelected) => isSelected).length %
      2 ===
    0
  ) {
    numGrids =
      Object.values(selectedSections).filter((isSelected) => isSelected)
        .length / 2;
    numColumns = 2;
  } else {
    numGrids = Math.ceil(
      Object.values(selectedSections).filter((isSelected) => isSelected)
        .length / 3
    ); 
    numColumns = 3;
  }

  return (
    <>
      <Button
        onClick={handleOpenDialog}
        variant='outlined'
        style={{
          fontSize: 15,
          backgroundColor: '#9019a7',
          color: '#fff',
          padding: '5px 10px',
          textTransform: 'none',
          height: '55px',
          marginLeft: 'auto',
          alignSelf: 'center',
        }}
      >
        Customize Sections
      </Button>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>
          Customize Sections (Note: Only 7 sections can be customised at a time
          due to API calling limitation)
        </DialogTitle>
        <DialogContent>
          {sections.map((section) => (
            <FormControlLabel
              key={section}
              control={
                <Checkbox
                  checked={selectedSections[section]}
                  onChange={() => handleToggleSection(section)}
                  color='primary'
                  disabled={
                    Object.values(selectedSections).filter(
                      (isSelected) => isSelected
                    ).length >= 7 && !selectedSections[section]
                  }
                />
              }
              label={section}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {[...Array(numGrids)].map((_, gridIndex) => (
        <Grid
          key={gridIndex}
          container
          spacing={2}
          style={{ marginBottom: '40px' }}
        >
          {sections
            .filter((section) => selectedSections[section])
            .slice(gridIndex * numColumns, gridIndex * numColumns + numColumns)
            .map((section, index) => (
              <Grid key={index} item xs={12} sm={12 / numColumns}>
                <Box
                  bgcolor='#f0f4f8'
                  borderRadius={8}
                  border='1px solid #ccc'
                  p={2}
                >
                  <Typography
                    variant='h5'
                    style={{
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center', 
                    }}
                  >
                    {section}
                    <ChevronRightIcon sx={{ fontSize: 30 }} />
                  </Typography>

                  {NytArticles &&
                    NytArticles[section] &&
                    NytArticles[section]
                      .slice(0, 3)
                      .map((article, articleIndex) => (
                        <ArticlesCard
                          key={articleIndex}
                          title={
                            article?.title === ''
                              ? 'Title Unknow'
                              : article?.title
                          }
                          content={article.abstract}
                          url={article.url}
                          imageSrc={
                            article.multimedia &&
                            article.multimedia[1] &&
                            article.multimedia[1].url 
                              ? article.multimedia[1].url
                              : no_img 
                          }
                        />
                      ))}
                </Box>
              </Grid>
            ))}
        </Grid>
      ))}
    </>
  );
};

export default AutoGrid;

import React, {useState} from 'react';
import {arrayOf, object} from 'prop-types';
import {connect} from 'react-redux';
import Review from './Review';

const ReviewWrapper = ({navigation, vocabularies, recentVocabularies}) => {
  const [featured, setFeatured] = useState({word: '', url: ''});

  const vocabulariesAreEmpty = () => {
    return vocabularies.length === 0;
  };

  const filterByLetter = (array, letter) => {
    return array.filter(
      item => item.word.toLowerCase().charAt(0) === letter.toLowerCase(),
    );
  };

  const handleSetFeatured = item => {
    if (featured.word === '') {
      setFeatured({word: item.word, url: item.url});
    } else if (featured.word === item.word) {
      setFeatured({word: '', url: ''});
    } else {
      setFeatured({word: item.word, url: item.url});
    }
  };

  const DATA = [
    {title: 'Recents', data: recentVocabularies},
    {
      title: 'A',
      data: filterByLetter(vocabularies, 'A'),
    },
    {
      title: 'B',
      data: filterByLetter(vocabularies, 'B'),
    },
    {
      title: 'C',
      data: filterByLetter(vocabularies, 'C'),
    },
    {
      title: 'D',
      data: filterByLetter(vocabularies, 'D'),
    },
    {
      title: 'E',
      data: filterByLetter(vocabularies, 'E'),
    },
    {
      title: 'F',
      data: filterByLetter(vocabularies, 'F'),
    },
    {
      title: 'G',
      data: filterByLetter(vocabularies, 'G'),
    },
    {
      title: 'H',
      data: filterByLetter(vocabularies, 'H'),
    },
    {
      title: 'I',
      data: filterByLetter(vocabularies, 'J'),
    },
    {
      title: 'J',
      data: filterByLetter(vocabularies, 'K'),
    },
    {
      title: 'K',
      data: filterByLetter(vocabularies, 'L'),
    },
    {
      title: 'L',
      data: filterByLetter(vocabularies, 'M'),
    },
    {
      title: 'M',
      data: filterByLetter(vocabularies, 'N'),
    },
    {
      title: 'N',
      data: filterByLetter(vocabularies, 'O'),
    },
    {
      title: 'O',
      data: filterByLetter(vocabularies, 'P'),
    },
    {
      title: 'P',
      data: filterByLetter(vocabularies, 'Q'),
    },
    {
      title: 'Q',
      data: filterByLetter(vocabularies, 'R'),
    },
    {
      title: 'R',
      data: filterByLetter(vocabularies, 'S'),
    },
    {
      title: 'S',
      data: filterByLetter(vocabularies, 'T'),
    },
    {
      title: 'T',
      data: filterByLetter(vocabularies, 'U'),
    },
    {
      title: 'U',
      data: filterByLetter(vocabularies, 'V'),
    },
    {
      title: 'V',
      data: filterByLetter(vocabularies, 'W'),
    },
    {
      title: 'W',
      data: filterByLetter(vocabularies, 'X'),
    },
    {
      title: 'X',
      data: filterByLetter(vocabularies, 'Y'),
    },
    {
      title: 'Y',
      data: filterByLetter(vocabularies, 'Z'),
    },
    {
      title: 'Z',
      data: filterByLetter(vocabularies, 'E'),
    },
  ];

  return (
    <Review
      navigation={navigation}
      featured={featured}
      setFeatured={handleSetFeatured}
      DATA={DATA}
      vocabulariesAreEmpty={vocabulariesAreEmpty()}
    />
  );
};

ReviewWrapper.propTypes = {
  navigation: object.isRequired,
  vocabularies: arrayOf(object).isRequired,
  recentVocabularies: arrayOf(object).isRequired,
};

const mapStateToProps = state => ({
  vocabularies: state.vocabulariesReducer.vocabularies,
  recentVocabularies: state.vocabulariesReducer.recentVocabularies,
});

export default connect(mapStateToProps)(ReviewWrapper);

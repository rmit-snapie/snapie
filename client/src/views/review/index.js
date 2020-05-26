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
      data: filterByLetter(vocabularies, 'I'),
    },
    {
      title: 'J',
      data: filterByLetter(vocabularies, 'J'),
    },
    {
      title: 'K',
      data: filterByLetter(vocabularies, 'K'),
    },
    {
      title: 'L',
      data: filterByLetter(vocabularies, 'L'),
    },
    {
      title: 'M',
      data: filterByLetter(vocabularies, 'M'),
    },
    {
      title: 'N',
      data: filterByLetter(vocabularies, 'N'),
    },
    {
      title: 'O',
      data: filterByLetter(vocabularies, 'O'),
    },
    {
      title: 'P',
      data: filterByLetter(vocabularies, 'P'),
    },
    {
      title: 'Q',
      data: filterByLetter(vocabularies, 'Q'),
    },
    {
      title: 'R',
      data: filterByLetter(vocabularies, 'R'),
    },
    {
      title: 'S',
      data: filterByLetter(vocabularies, 'S'),
    },
    {
      title: 'T',
      data: filterByLetter(vocabularies, 'T'),
    },
    {
      title: 'U',
      data: filterByLetter(vocabularies, 'U'),
    },
    {
      title: 'V',
      data: filterByLetter(vocabularies, 'V'),
    },
    {
      title: 'W',
      data: filterByLetter(vocabularies, 'W'),
    },
    {
      title: 'X',
      data: filterByLetter(vocabularies, 'X'),
    },
    {
      title: 'Y',
      data: filterByLetter(vocabularies, 'Y'),
    },
    {
      title: 'Z',
      data: filterByLetter(vocabularies, 'Z'),
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

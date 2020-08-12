module.exports = {
  // before: {
  //   'Introduction': ['before/introduction'],
  //   'After Acceptance': ['before/after-acceptance'],
  // },
  after: {
    'Introduction': ['after/introduction'],
    'Housing Options':[
      'after/housing',
      'after/residential-colleges',
      'after/halls',
      'after/pgp',
    ],
    'Before Departure': [
      'after/photo',
      'after/registration1',
      'after/checkup',
      'after/student-pass',
      'after/qet',
    ],
    'What To Prepare??':[
      'after/registration2',
      'after/document-verification',
      'after/what-to-bring',
    ],
    'After Arrival': [
      'after/getting-to-nus',
      'after/checkin',
      'after/senior-pickup',
      {
        type: 'category',
        label: 'Orientation',
        items: [
          'after/pinus-ori',
          'after/hall-fac-ori',
        ]
      },
      'after/module-registration',
    ],
    'Financial Issues': [
      'after/bank-accounts',
      'after/tg',
      'after/financial-aid',
    ],
    'Others': [
      'after/apps',
      'after/cellular',
      'after/singlish',
      'after/faq',
      'after/things-to-know',
    ],
  },
  'CCAs and Clubs': {
    'Index': ['cca/cca-index'],
    'Academic': [
      'cca/engin-club',
      'cca/ise-club',
      'cca/statistics-society',
    ],
    'Cultural': [
      'cca/angklung',
      'cca/piano-ensemble',
      'cca/choir',
      'cca/genus',
      'cca/nusso',
      'cca/kdt'
    ],
    'NUSSU': [
      'cca/commit',
      'cca/bizcom',
      'cca/vpc',
    ],
    'Specialist': [
      'cca/nus-invest',
      'cca/nes',
      'cca/consulting',
      'cca/bridges-enterprise',
      'cca/dsc',
      'cca/hackers',
      'cca/fintech'
    ],
    'Social Cause' : [
      'cca/aiesec',
      'cca/tzuchi',
    ],
    'Sports' : [
      'cca/archery',
      'cca/taekwondo',
      'cca/esport',
      'cca/cuesports',
    ],
  }
};

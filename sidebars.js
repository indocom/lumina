module.exports = {
  before: {
    'Introduction': ['before/introduction'],
    'After Acceptance': ['before/after-acceptance'],
  },
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
      'after/student-pass',
      'after/qet',
      'after/checkup',
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
};

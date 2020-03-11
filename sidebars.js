module.exports = {
  after: {
    'Introduction': ['introduction'],
    'Before Departure': [
      'housing',
      'photo',
      'registration1',
      'student-pass',
      'qet',
      'checkup',
    ],
    'What To Prepare??':[
      'registration2',
      'document-verification',
      'what-to-bring',
    ],
    'After Arrival': [
      'getting-to-nus',
      'checkin',
      'senior-pickup',
      {
        type: 'category',
        label: 'Orientation',
        items: [
          'pinus-ori',
          'hall-fac-ori',
        ]
      },
      'module-registration',
    ],
    'Financial Issues': [
      'bank-accounts',
      'tg',
      'financial-aid',
    ],
    'Others': [
      'apps',
      'cellular',
      'singlish',
      'faq',
      'interview',
      'things-to-know',
    ],
  },
  before: {
    'Contribution Guide': ['doc1', 'doc2', 'mdx'],
  }
};

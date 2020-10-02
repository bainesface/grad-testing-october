const stage11Concepts = require('../../stage-11/concepts.md');
const stage11AcceptanceCriteria = require('../../stage-11/acceptance-criteria.md');
const awsSetup = require('../../stage-11/aws-setup.md');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage11 = {
  name: 'Stage 11 - Getting email validation to work with a real backend',
  path: 'app/stage-11',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-11/concepts',
      markdownUrl: stage11Concepts,
    },
    {
      name: 'Challenge Acceptance Criteria',
      component: MarkdownLoader,
      path: 'app/stage-11/challenge/acceptance-criteria',
      markdownUrl: stage11AcceptanceCriteria,
    },
    {
      name: 'AWS Setup Instructions',
      component: MarkdownLoader,
      path: 'app/stage-11/aws-setup',
      markdownUrl: awsSetup,
    },
    {
      name: 'Frontend challenge start',
      component: stages[11].start,
      path: 'app/stage-11/frontend/challenge/start',
    },
    {
      name: 'Frontend challenge completed',
      component: stages[11].completed,
      path: 'app/stage-11/frontend/challenge/completed',
    },
  ],
};

module.exports = stage11;

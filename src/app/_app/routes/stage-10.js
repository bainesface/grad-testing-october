const stage10Concepts = require('../../stage-10/concepts.md');

const stage10AcceptanceCriteria = require('../../stage-10/challenge/acceptance-criteria.md');
const stage10FurtherConsiderations = require('../../stage-10/further-considerations.md');

const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage10 = {
  name: 'Stage 10 - Extracting the service layer',
  path: 'app/stage-10',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-10/concepts',
      markdownUrl: stage10Concepts,
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-10/challenge/acceptance-criteria',
      markdownUrl: stage10AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[10].start,
      path: 'app/stage-10/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[10].completed,
      path: 'app/stage-10/challenge/completed',
    },
    {
      name: 'Further considerations',
      component: MarkdownLoader,
      path: 'app/stage-10/further-considerations',
      markdownUrl: stage10FurtherConsiderations,
    },
  ],
};

module.exports = stage10;

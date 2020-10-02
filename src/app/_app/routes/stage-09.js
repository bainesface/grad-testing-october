const stage09Concepts = require('../../stage-09/concepts.md');
const stage09AcceptanceCriteria = require('../../stage-09/challenge/acceptance-criteria.md');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage09 = {
  name: 'Stage 09 - Bringing it all together',
  path: 'app/stage-09',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-09/concepts',
      markdownUrl: stage09Concepts,
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-09/challenge/acceptance-criteria',
      markdownUrl: stage09AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[9].start,
      path: 'app/stage-09/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[9].completed,
      path: 'app/stage-09/challenge/completed',
    },
  ],
};

module.exports = stage09;

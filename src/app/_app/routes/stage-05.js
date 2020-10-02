const stage05Concepts = require('../../stage-05/concepts.md');
const { App: Stage05ExampleStart } = require('../../stage-05/example/start');
const {
  App: Stage05ExampleCompleted,
} = require('../../stage-05/example/completed');

const stage05AcceptanceCriteria = require('../../stage-05/challenge/acceptance-criteria.md');

const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage05 = {
  name: 'Stage 05 - Handling error responses from APIs',
  path: 'app/stage-05',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-05/concepts',
      markdownUrl: stage05Concepts,
    },
    {
      name: 'Example Start',
      component: Stage05ExampleStart,
      type: 'example',
      path: 'app/stage-05/example/start',
    },
    {
      name: 'Example Completed',
      component: Stage05ExampleCompleted,
      type: 'example',
      path: 'app/stage-05/example/completed',
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-05/challenge/acceptance-criteria',
      markdownUrl: stage05AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[5].start,
      path: 'app/stage-05/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[5].completed,
      path: 'app/stage-05/challenge/completed',
    },
  ],
};

module.exports = stage05;

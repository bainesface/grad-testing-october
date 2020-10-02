const stage08Concepts = require('../../stage-08/concepts.md');
const { App: Stage08ExampleStart } = require('../../stage-08/example/start');
const {
  App: Stage08ExampleCompleted,
} = require('../../stage-08/example/completed');
const stage08AcceptanceCriteria = require('../../stage-08/challenge/acceptance-criteria.md');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage08 = {
  name: 'Stage 08 - Mocking external dependencies',
  path: 'app/stage-08',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-08/concepts',
      markdownUrl: stage08Concepts,
    },
    {
      name: 'Example Start',
      component: Stage08ExampleStart,
      type: 'example',
      path: 'app/stage-08/example/start',
    },
    {
      name: 'Example Completed',
      component: Stage08ExampleCompleted,
      type: 'example',
      path: 'app/stage-08/example/completed',
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-08/challenge/acceptance-criteria',
      markdownUrl: stage08AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[8].start,
      path: 'app/stage-08/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[8].completed,
      path: 'app/stage-08/challenge/completed',
    },
  ],
};

module.exports = stage08;

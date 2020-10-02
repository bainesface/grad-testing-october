const stage03Concepts = require('../../stage-03/concepts.md');
const stage03AcceptanceCriteria = require('../../stage-03/challenge/acceptance-criteria.md');
const { App: Stage03ExampleStart } = require('../../stage-03/example/start');
const {
  App: Stage03ExampleCompleted,
} = require('../../stage-03/example/completed');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage03 = {
  name: 'Stage 03 - Mocking out http responses',
  path: 'app/stage-03',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-03/concepts',
      markdownUrl: stage03Concepts,
    },
    {
      name: 'Example Start',
      component: Stage03ExampleStart,
      type: 'example',
      path: 'app/stage-03/example/start',
    },
    {
      name: 'Example Completed',
      component: Stage03ExampleCompleted,
      type: 'example',
      path: 'app/stage-03/example/completed',
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-03/challenge/acceptance-criteria',
      markdownUrl: stage03AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[3].start,
      path: 'app/stage-03/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[3].completed,
      path: 'app/stage-03/challenge/completed',
    },
  ],
};

module.exports = stage03;

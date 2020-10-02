const stage06Concepts = require('../../stage-06/concepts.md');
const stage06AcceptanceCriteria = require('../../stage-06/challenge/acceptance-criteria.md');

const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');

const stage06 = {
  name: 'Stage 06 - Adding a new component to our shared component library',
  path: 'app/stage-06',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-06/concepts',
      markdownUrl: stage06Concepts,
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-06/challenge/acceptance-criteria',
      markdownUrl: stage06AcceptanceCriteria,
    },
  ],
};

module.exports = stage06;

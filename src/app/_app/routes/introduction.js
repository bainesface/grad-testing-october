const courseIntroduction = require('../../../course-introduction/course-introduction.md');
const introductionReactTestingLibraryConcepts = require('../../../introduction-react-testing-library/concepts.md');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const introductionComponentsConcepts = require('../../../component-library/concepts.md');
const introductionomponentsAcceptanceCriteria = require('../../../component-library/challenge/acceptance-criteria.md');
const {
  App: IntroductionomponentsStart,
} = require('../../../component-library/challenge/start');
const {
  App: IntroductionomponentsCompleted,
} = require('../../../component-library/challenge/completed');

const introduction00 = {
  name: 'Course Introduction',
  path: 'course-introduction',
  component: Stage,
  items: [
    {
      name: 'Introduction',
      component: MarkdownLoader,
      path: 'course-introduction/introduction',
      markdownUrl: courseIntroduction,
    },
  ],
};

const introduction01 = {
  name: 'Introduction React Testing Library',
  path: 'introduction-react-testing-library',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'introduction-react-testing-library/concepts',
      markdownUrl: introductionReactTestingLibraryConcepts,
    },
  ],
};

const introduction02 = {
  name: 'Component Library',
  path: 'component-library',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'component-library/concepts',
      markdownUrl: introductionComponentsConcepts,
    },
    {
      name: 'Challenge Acceptance Criteria',
      component: MarkdownLoader,
      path: 'component-library/challenge/acceptance-criteria',
      markdownUrl: introductionomponentsAcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: IntroductionomponentsStart,
      path: 'component-library/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: IntroductionomponentsCompleted,
      path: 'component-library/challenge/completed',
    },
  ],
};

module.exports = {
  introduction00,
  introduction01,
  introduction02,
};

# ⚡️ Introduction to the workshop

This workshop aims to demonstrate the power of Test Driven Development as a technique for helping deliver products in a real business-like environment. It has been designed by people who have been doing exactly this for several years at scale. We want to empower you to write tests that give you the confidence to make changes to your code over time. To this end, this is both a course that demonstrates the value of TDD, but also promotes a certain testing style.

This is, therefore, an opinionated course - we are going to make certain claims about TDD and what it can do for you, but also extend our advice into how to write unit tests that can help you to make changes over time, instead of needlessly getting in your way. The authors of this course have worked with test suites that enable changes with confidence and know how liberating it is to work in this kind of environment. Each of us has also experienced tests that offer little to no value and cause more problems than they solve, so we’d like to take this opportunity to show you how to write tests that will leave you confident to release without stress, and not the other way round.

If there is one take-home point we’d like to stress in this course, it’s that the true value of tests is not to simply prove that your code currently works - it’s to enable you to make changes over time with confidence.

## 🐈 Course structure

You will be building a Pets application in this course. We are going to ask you to incrementally add new features to this application, and as we build new features we will be teaching new core concepts.

The course is broken down into stages, with each stage building on from the previous stage. The folder structure for each stage contains a `challenge/` and `example/` folder. You will be working in the `challenge/` folders. We have provided `completed/` and `start/` folders for each `challenge/`. We would encourage you to not view the `completed/` folder until you have completed the challenges yourself if possible, but they are there for reference if you need them.

The `example/` folder will be used by the course instructors to live-code an example to demonstrate a new concept before you move onto the challenge.

Within the stages, we also have a `concepts.md` file and `acceptance-criteria.md` file. The concepts file is there to illustrate the test related concepts we are demonstrating at each stage. The acceptance criteria emulate the type of criteria you may receive when you’re working in a business environment. We would encourage you to use these acceptance criteria to create your test cases, as it’s generally a good idea to do this to ensure you’re meeting all the business requirements when you take on a piece of work.

Before we come to the main application itself, together we are going to start by building some components in isolation in our component library. There’s a couple of reasons we decided to do this - firstly, it gives us a nice platform to introduce Jest and React testing library, but also component libraries are becoming very popular in the industry nowadays. Both the BBC and Sky have libraries that work in this manner.

Along the way, we will build on top of this library as new business requirements come in.

## Concepts we wish to prove

We believe that writing your code test-first ensures that you will not have gaps in your test coverage. We believe that writing tests based on behaviours and not implementation details results in tests that make changes easier to handle and regressions less likely to occur. Tests against behaviour means not over-mocking and not simply asserting that your current implementation is in place. What this might mean in a React based context is that we would not encourage tests that can test the internal state of a React component, for example. Instead, you will assert that your application is working by interacting with it in your tests like a user would, and asserting against the output of the DOM.

Here are some other key concepts:

- Tests should help you to make changes with confidence over time
- Tests that are less tied to implementation are better for this purpose than tests that are highly coupled to your implementation
- For this reason, we will be encouraging you to not mock every collaborator and to think carefully about when and where you do use mocks
- We want to encourage you to take context into account - there are no silver bullets and understanding the value you’re getting back is the most important thing
- You can break the rules if you understand the value you’re getting from them
- Above all - writing test first makes your code testable by default and ensures your application has no gaps

## Summary

TDD is a technique that can save you and your team a lot of stress and can help you get to a place where you can keep incrementally building new features without the fear that you have broken existing features. Many organisations get this badly wrong in practice, either by not writing their code test first or by writing tests that are so tightly coupled to an implementation that the whole value of having a test suite is lost.

You are going to build a component library, and then an application that will use that library. This application will be built incrementally as the business asks for new features. Along the way, you will learn certain key techniques that we have found useful in the industry. We hope you will come away with an understanding of the value of TDD in terms of how it can be applied in practice - including (and we would argue especially) in a fast-changing business environment.

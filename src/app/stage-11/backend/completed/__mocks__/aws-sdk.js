const mockSendEmail = jest.fn().mockImplementation((params) => {
  return {
    promise: () => {
      return new Promise((res, rej) => {
        const areEmailsValid = params.Destination.ToAddresses.every(
          (address) => {
            return address === process.env.VERIFIED_DESTINATION_EMAIL;
          }
        );
        if (areEmailsValid) {
          res();
        } else {
          rej({
            code: 'MessageRejected',
          });
        }
      });
    },
  };
});

const mock = jest.fn().mockImplementation(() => {
  return { sendEmail: mockSendEmail };
});

module.exports = { SESV2: mock };

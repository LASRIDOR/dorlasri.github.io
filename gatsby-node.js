exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect } = actions;

  const result = await graphql(`
    {
      cv: file(name: { eq: "Dor_Lasri_Resume" }) {
        publicURL
      }
    }
  `);

  // Handle Errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  createRedirect({
    fromPath: "/cv",
    toPath: result.data.cv.publicURL,
    isPermanent: true,
  });
};

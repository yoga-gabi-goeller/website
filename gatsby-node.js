exports.onCreateBabelConfig = ({ stage, actions }, pluginOptions) => {
  const ssr = stage === `build-html` || stage === `build-javascript`;

  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    stage,
    options: { ...pluginOptions, ssr }
  });
};

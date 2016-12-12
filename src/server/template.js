/* eslint-disable prefer-template, max-len */
export default vo => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Router Example</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="${vo.jsBundle}"></script>
  </body>
</html>
`;

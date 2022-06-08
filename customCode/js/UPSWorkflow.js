return async function() {
  // call the workflow and get the resulting data
  let d = await this.$wfGetData('-N2qmUbz2tSpSXc3twk2')
    // put the response into the global model
    // the global model is a browser memory store templates can render
    $setGlobalModel('data', d)
  return d 
}
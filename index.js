const driver = {}


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const NEW_OBJ = Object.assign({}, driver);
  delete NEW_OBJ[key];
  return NEW_OBJ;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}
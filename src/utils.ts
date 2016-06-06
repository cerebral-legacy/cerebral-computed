export function getByPath(path, state, forcePath?) {
  var currentPath = state
  for (var x = 0; x < path.length; x++) {
    var key = path[x]
    if (forcePath && currentPath[key] === undefined) {
      var newBranch = {}
      Object.defineProperty(newBranch, '.referencePaths', {
        writable: true,
        configurable: true,
        value: [path.slice().splice(0, x + 1)]
      })
      currentPath[key] = newBranch
    }
    if (currentPath[key] === undefined) {
      return currentPath[key]
    }
    currentPath = currentPath[key]
  }
  return currentPath
}

function getTxtFilesFromDirectory(path, files = []) {
  let currentDirectory = getDirectoryContents(path)
  if (currentDirectory.length === 0) return files
  for (let file in currentDirectory) {
    if (file.contains('.txt')) {
      files.push(file)
    }
    if (isDirectory(file)) {
      getTxtFilesFromDirectory(file, files)
    }
  }
  return files
}

function isDirectory(file) {} // return boolean
function getDirectoryContents(path) {} // return string: []
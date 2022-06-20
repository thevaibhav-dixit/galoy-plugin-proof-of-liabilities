import fs from 
const FileSystemLiabilityTreeRepository = () : ILiabilityTreeRepository => {

    const persistLiabilityTree = () => {
        // file system save tree.seriaize
        fs.write(liabilityTree.toString())
    }

    const loadLiabilityTree = (name) => {
        return fs.read(name)
    }

    return {
        persistLiabilityTree,
        loadLiabilityTree
    }
}

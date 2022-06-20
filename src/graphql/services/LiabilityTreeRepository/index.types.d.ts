type ILiabilityTreeRepository = {
    persistLiabilityTree: (LiabilityTree, name) => void
    findLiabilityTree: (name) => LiabilityTree
}

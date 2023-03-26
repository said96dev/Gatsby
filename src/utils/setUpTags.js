const setUpTags = (recipes) => {
  const allTags = {}

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1 //* Tag is the Key for the Object allTags
      }
    })
  })
  const newTags = Object.entries(allTags) //* returns an array of key-value pairs
  newTags.sort((a, b) => {
    const [firstTag] = a

    const [secondTag] = b

    return firstTag.localeCompare(secondTag)
  })
  return newTags
}

export default setUpTags

import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [
      {
        category: 'Task',
        icon: 'faShoppingBag',
        name: 'Shopping list',
        created: 1633926193716,
        content: 'Tomatoes, bread',
        updated: '',
        isArchived: false,
        id: 1,
      },
      {
        category: 'Random Thought',
        icon: '<i class="fa fa-briefcase fa-2x"></i>',
        name: 'The theory of evolution',
        created: 1662924593716,
        content: 'The evolution of people life',
        updated: '',
        isArchived: false,
        id: 2,
      },
      {
        category: 'Idea',
        icon: '<i class="fa fa-lightbulb-o fa-2x"></i>',
        name: 'New Feature',
        created: 1643925593716,
        content: 'Implement new project',
        updated: '',
        isArchived: false,
        id: 3,
      },
      {
        category: 'Quote',
        icon: '<i class="fa fa-quote-right fa-2x"></i>',
        name: 'William Gaddis',
        created: 1653726593716,
        content: 'Power doesn`t corrupt people',
        updated: '',
        isArchived: true,
        id: 4,
      },
      {
        category: 'Idea',
        icon: '<i class="fa fa-lightbulb-o fa-2x"></i>',
        name: 'Create new project',
        created: 1660826593716,
        content: 'Implement new project',
        updated: '',
        isArchived: true,
        id: 5,
      },
      {
        category: 'Task',
        icon: '<i class="fa fa-shopping-cart fa-2x"></i>',
        name: 'To do...',
        created: 1662926393716,
        content: 'Study english',
        updated: '',
        isArchived: true,
        id: 6,
      },
      {
        category: 'Quote',
        icon: '<i class="fa fa-quote-right fa-2x"></i>',
        name: 'Barack Obama',
        created: 1663126593716,
        content: "I'm a warrior for the middle class",
        updated: '',
        isArchived: false,
        id: 7,
      },
    ],
  },
  reducers: {
    create(state, action) {
      state.data.push(action.payload)
    },
    edit(state, action) {
      const serchNote:number = state.data.findIndex(el=>el.id === action.payload.id)
      state.data[serchNote] = action.payload
    },
    archive(state, action) {
        const archiveNote = state.data.find(el=>el.id === action.payload.id)
        if (archiveNote !== undefined){
          archiveNote.isArchived = true
        }
        
    },
    remove(state, action) {
        state.data = state.data.filter((el) => el.id !== action.payload.id)
    },
    unArchive(state, action) {
      const archivedNote = state.data.find(el=>el.id === action.payload)
      if(archivedNote !== undefined){
        archivedNote.isArchived = false
      }
  },
  },
})
export const { create, edit, archive, remove, unArchive } = dataSlice.actions
export default dataSlice.reducer

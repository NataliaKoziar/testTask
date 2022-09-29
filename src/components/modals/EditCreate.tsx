import React, { useState } from 'react'
import { Idata } from '../../store/models'
interface FormProps {
  name: string
  activeRow?: Idata
  onSubmit: (e: Idata) => void
}

const EditCreateForm = ({ activeRow, onSubmit }: FormProps) => {
  const title = activeRow?.id ? 'Edit' : 'Create'
  const [category, setCategory] = useState(activeRow?.category || '')
  const [name, setName] = useState(activeRow?.name || '')
  const [content, setContent] = useState(activeRow?.content || '')

  return (
    <form>
      <h2>{title} Note</h2>
      <label>Category:</label>
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
        <option value="Quote">Quote</option>
      </select>
      <label>Name:</label>
      <input
        type="text"
        name="title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Content:</label>
      <input
        type="text"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="button" disabled={!category || !name || !content}
        className="btn"
        value={title}
        onClick={() =>
          onSubmit(
            {
              category: category,
              name: name,
              created: activeRow?.created || Date.now(),
              content: content,
              updated: activeRow ? new Date().toLocaleDateString() : '',
              isArchived: false,
              id: activeRow?.id || Date.now().toString(),
            })
        }
      />
    </form>
  )
}
export default EditCreateForm

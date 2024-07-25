// import data from '../mock/data.json';
import { useDispatch, useSelector } from 'react-redux'
import { JobPosition } from './JobPosition'
import { selectVisiblePositions } from 'store/positions/position-selectors'
import { addFilter } from 'store/filters/filter-actions'
import { selectAlLFilters } from 'store/filters/filter-selectors'

const JobList = () => {
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  const currentFilters = useSelector(selectAlLFilters)
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  )

  return (
    <div className="job-list">
      {positions.map((pos) => (
        <JobPosition key={pos.id} {...pos} handleAddFilter={handleAddFilter} />
      ))}
    </div>
  )
}

export { JobList }

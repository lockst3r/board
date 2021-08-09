export interface ITasksList {
  id: string | number
  title: string
  description: string
  assignee: string | number
  comments: Array<string>
  timeTracking: {
    estimatedTime: string | Date
    spentTime: string | Date
    remainingTime: string | Date
  }
  checklist: {
    done: boolean
    description: string
  }
  attachments: Array<string>
}

export interface ISectionsList {
  id: string | number
  title: string
  tasksList: Array<ITasksList>
}

export interface IBoardsList {
  id: string | number
  title: string
  sectionsList: Array<ISectionsList>
}

export interface IInitialBoardsState {
  boardsList: Array<IBoardsList>
  active: Array<IBoardsList>
}

// utils/generateLayout.ts
export type Department = {
  id: string
  name: string
  x: number
  y: number
  width: number
  height: number
}

export type Procedure = {
  id: string
  name: string
  x: number
  y: number
  color: string
  comments: number
  departments: string[] // department IDs
}

const deptNames = ['Alumni Relations', 'Alumni', 'Finance', 'Registrar', 'Advising']

const procedureNames = [
  'Add student to mailing list',
  'Unsubscribe',
  'Turning Alumni into Donors',
  'Update student address',
  'Financial aid verification',
]

const colors = ['#2ca02c', '#ff7f0e', '#d62728'] // green, orange, red

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateLayout() {
  const departments: Department[] = []
  const usedCorners = new Set<string>()

  const canvasW = 800
  const canvasH = 500
  const pad = 10
  const boxW = 160
  const boxH = 120

  const corners = [
    { x: pad, y: pad },
    { x: canvasW - boxW - pad, y: pad },
    { x: pad, y: canvasH - boxH - pad },
    { x: canvasW - boxW - pad, y: canvasH - boxH - pad },
  ]

  const numDepts = getRandomInt(2, 4)
  const deptChoices = [...deptNames].sort(() => 0.5 - Math.random()).slice(0, numDepts)

  for (let i = 0; i < numDepts; i++) {
    const corner = corners[i]
    departments.push({
      id: `dept-${i}`,
      name: deptChoices[i],
      x: corner.x,
      y: corner.y,
      width: boxW,
      height: boxH,
    })
  }

  const procedures: Procedure[] = []

  const numProcedures = getRandomInt(2, 4)
  for (let i = 0; i < numProcedures; i++) {
    const name = procedureNames[i % procedureNames.length]
    const color = colors[getRandomInt(0, 2)]
    const comments = getRandomInt(1, 30)
    const isSpanning = Math.random() < 0.4

    const posX = getRandomInt(pad + 100, canvasW - 200)
    const posY = getRandomInt(pad + 100, canvasH - 150)

    procedures.push({
      id: `proc-${i}`,
      name,
      x: posX,
      y: posY,
      color,
      comments,
      departments: isSpanning ? ['dept-0', 'dept-1'] : ['dept-0'],
    })
  }

  return { departments, procedures }
}

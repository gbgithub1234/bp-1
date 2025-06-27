// components/Canvas.tsx
'use client'

import { useEffect, useState } from 'react'
import DepartmentBox from './DepartmentBox'
import ProcedureBox from './ProcedureBox'
import { generateLayout, Department, Procedure } from '@/utils/generateLayout'

export default function Canvas() {
  const [departments, setDepartments] = useState<Department[]>([])
  const [procedures, setProcedures] = useState<Procedure[]>([])

  useEffect(() => {
    const { departments, procedures } = generateLayout()
    setDepartments(departments)
    setProcedures(procedures)
  }, [])

  return (
    <div className="relative w-[800px] h-[500px] border-4 border-black">
      {departments.map((dept) => (
        <DepartmentBox key={dept.id} dept={dept} />
      ))}
      {procedures.map((proc) => (
        <ProcedureBox key={proc.id} proc={proc} />
      ))}
    </div>
  )
}

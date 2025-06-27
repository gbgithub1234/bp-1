// components/DepartmentBox.tsx
import { Department } from '@/utils/generateLayout'

export default function DepartmentBox({ dept }: { dept: Department }) {
  return (
    <div
      className="absolute border border-black border-dotted p-2 font-bold text-sm"
      style={{
        top: dept.y,
        left: dept.x,
        width: dept.width,
        height: dept.height,
      }}
    >
      {dept.name}
    </div>
  )
}

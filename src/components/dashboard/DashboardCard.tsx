import { Link } from "@tanstack/react-router"

const DashboardCard = ({label, description, to, img_path}: {label: string, description: string, to: string, img_path: string}) => {
  return (
    <Link className="w-[300px] m-auto border rounded-md border-gray-500" to={to}>
      <img src={img_path} alt={label} className="mb-[8px]" />
      <div className="p-[16px]">
        <h2 className="text-3xl mb-[16px]">{label}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default DashboardCard

import employee from "./compoments/employee.js";
import manager from "./compoments/manager.js";

const router = [
    {
        Identity: "/employee",
        compoment: employee
    },
    {
        Identity: "/manager",
        compoment: manager
    },
    {
        Identity: "/",
        compoment: manager
    }
]

export default router;
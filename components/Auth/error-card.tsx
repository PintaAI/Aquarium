import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CardWrapper } from "./card-wraper"
const ErrorCard = () => {
  return (
      <CardWrapper 
        headerLabel="Error"
        backButtonHref="/auth/login"
        backButtonLabel="Back to Login"
      >
            <div className="flex justify-center">
                <ExclamationTriangleIcon className="h-10 w-10 text-red-500" />
            </div>
      </CardWrapper>
           
    
  )
}

export default ErrorCard
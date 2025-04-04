
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PersonCardProps {
  name: string;
  status: "active" | "inactive" | "pending";
  phone: string;
  siteName: string;
  createdDate: string;
  updatedDate: string;
  assignedTo: string;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  status,
  phone,
  siteName,
  createdDate,
  updatedDate,
  assignedTo,
  onEdit,
  onDelete,
  className,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "inactive":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    }
  };

  return (
    <Card className={cn("w-full max-w-md shadow-md hover:shadow-lg transition-shadow duration-300", className)}>
      <CardHeader className="pb-2 flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <Badge className={cn("ml-2 capitalize", getStatusColor(status))}>
              {status}
            </Badge>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                  onClick={onEdit}
                >
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-600 hover:text-red-800 hover:bg-red-100"
                  onClick={onDelete}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="grid grid-cols-[1fr_2fr] gap-y-2 text-sm">
          <span className="text-gray-500 font-medium">Phone:</span>
          <span>{phone}</span>
          
          <span className="text-gray-500 font-medium">Site Name:</span>
          <span>{siteName}</span>
          
          <span className="text-gray-500 font-medium">Created Date:</span>
          <span>{createdDate}</span>
          
          <span className="text-gray-500 font-medium">Updated Date:</span>
          <span>{updatedDate}</span>
          
          <span className="text-gray-500 font-medium">Assigned to:</span>
          <span className="font-medium text-blue-700">{assignedTo}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-4 text-xs text-gray-400 flex justify-end">
        ID: 12345
      </CardFooter>
    </Card>
  );
};

export default PersonCard;

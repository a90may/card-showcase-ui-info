
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <Card className={cn("w-full shadow-sm border-l-4 border-l-blue-500", className)}>
      <CardHeader className="pb-2 flex flex-row justify-between items-start p-4">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-2 flex-wrap">
            <h3 className="text-base font-semibold">{name}</h3>
            <Badge className={cn("capitalize text-xs", getStatusColor(status))}>
              {status}
            </Badge>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                  onClick={onEdit}
                >
                  <Edit className="h-3.5 w-3.5" />
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
                  className="h-7 w-7 text-red-600 hover:text-red-800 hover:bg-red-100"
                  onClick={onDelete}
                >
                  <Trash2 className="h-3.5 w-3.5" />
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
      
      <CardContent className="pt-0 px-4 pb-4">
        <div className="grid grid-cols-1 gap-y-1.5 text-sm">
          <div className="flex justify-between items-center py-1 border-b border-gray-100">
            <span className="text-gray-500 font-medium">Phone:</span>
            <span className="text-right">{phone}</span>
          </div>
          
          <div className="flex justify-between items-center py-1 border-b border-gray-100">
            <span className="text-gray-500 font-medium">Site Name:</span>
            <span className="text-right">{siteName}</span>
          </div>
          
          <div className="flex justify-between items-center py-1 border-b border-gray-100">
            <span className="text-gray-500 font-medium">Created Date:</span>
            <span className="text-right">{createdDate}</span>
          </div>
          
          <div className="flex justify-between items-center py-1 border-b border-gray-100">
            <span className="text-gray-500 font-medium">Updated Date:</span>
            <span className="text-right">{updatedDate}</span>
          </div>
          
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-500 font-medium">Assigned to:</span>
            <span className="text-right font-medium text-blue-700">{assignedTo}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonCard;


import PersonCard from "@/components/PersonCard";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  // Sample data that would typically come from an API
  const people = [
    {
      name: "John Doe",
      status: "active" as const,
      phone: "1234567890",
      siteName: "Test Site 1",
      createdDate: "12/05/2024",
      updatedDate: "12/06/2024",
      assignedTo: "Jane Smith"
    },
    {
      name: "Alice Johnson",
      status: "pending" as const,
      phone: "9876543210",
      siteName: "Test Site 2",
      createdDate: "10/03/2024",
      updatedDate: "11/15/2024",
      assignedTo: "Bob Williams"
    },
    {
      name: "Emily Davis",
      status: "inactive" as const,
      phone: "5551234567",
      siteName: "Test Site 3",
      createdDate: "09/21/2024",
      updatedDate: "10/30/2024",
      assignedTo: "Michael Brown"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-gray-800">People</h1>
        
        <div className="space-y-3">
          {people.map((person, index) => (
            <PersonCard
              key={index}
              name={person.name}
              status={person.status}
              phone={person.phone}
              siteName={person.siteName}
              createdDate={person.createdDate}
              updatedDate={person.updatedDate}
              assignedTo={person.assignedTo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

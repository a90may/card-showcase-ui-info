
import PersonCard from "@/components/PersonCard";

const Index = () => {
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Person Card Example</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            name="John Doe"
            status="active"
            phone="1234567890"
            siteName="Test Site 1"
            createdDate="12/05/2024"
            updatedDate="12/06/2024"
            assignedTo="Jane Smith"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          
          <PersonCard
            name="Alice Johnson"
            status="pending"
            phone="9876543210"
            siteName="Test Site 2"
            createdDate="10/03/2024"
            updatedDate="11/15/2024"
            assignedTo="Bob Williams"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          
          <PersonCard
            name="Emily Davis"
            status="inactive"
            phone="5551234567"
            siteName="Test Site 3"
            createdDate="09/21/2024"
            updatedDate="10/30/2024"
            assignedTo="Michael Brown"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

import { Upload, Link, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Upload Content for Analysis
          </h2>
          <p className="text-muted-foreground">
            Upload an image or video, or paste a social media link to verify its authenticity
          </p>
        </div>

        <Card 
          className={`p-8 border-2 border-dashed transition-smooth shadow-card hover:shadow-hover ${
            dragActive ? 'border-primary bg-accent/20' : 'border-border'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
                <Upload className="w-8 h-8 text-accent-strong" />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-medium text-foreground">
                Drop files here or click to upload
              </p>
              <p className="text-sm text-muted-foreground">
                Supports JPG, PNG, MP4, MOV files up to 50MB
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
                <Image className="w-4 h-4 mr-2" />
                Choose File
              </Button>
              <Button variant="outline" className="border-accent-strong text-accent-strong hover:bg-accent">
                <Link className="w-4 h-4 mr-2" />
                Paste Link
              </Button>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Your uploads are processed securely and deleted after analysis
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UploadSection;
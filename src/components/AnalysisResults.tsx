import { Camera, Calendar, MapPin, AlertTriangle, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import sampleImage from "@/assets/sample-image.jpg";
import heatmapOverlay from "@/assets/heatmap-overlay.jpg";

const AnalysisResults = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);
  const tamperScore = 78;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Analysis Results</h2>
        <p className="text-muted-foreground">
          Comprehensive forensic analysis of your uploaded content
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Metadata Card */}
        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-accent-strong" />
              <span>Metadata Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Camera Model</span>
                <span className="text-sm font-medium">Canon EOS R5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Timestamp</span>
                <span className="text-sm font-medium">2024-03-15 14:32:18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">GPS Location</span>
                <span className="text-sm font-medium">37.7749, -122.4194</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">File Size</span>
                <span className="text-sm font-medium">2.4 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Resolution</span>
                <span className="text-sm font-medium">1920 x 1080</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <Badge variant="outline" className="border-success text-success">
                <MapPin className="w-3 h-3 mr-1" />
                Metadata Intact
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Tamper Score Card */}
        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <span>Authenticity Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="2"
                />
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="hsl(var(--warning))"
                  strokeWidth="2"
                  strokeDasharray={`${tamperScore}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-warning">{tamperScore}%</span>
                <span className="text-xs text-muted-foreground">Suspicious</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Potential tampering detected in image regions
              </p>
              <Badge variant="outline" className="border-warning text-warning">
                Requires Further Review
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Image Preview Card */}
        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Image Preview</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHeatmap(!showHeatmap)}
                className="border-accent-strong text-accent-strong hover:bg-accent"
              >
                {showHeatmap ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                {showHeatmap ? "Hide" : "Show"} Heatmap
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={sampleImage} 
                alt="Uploaded content for analysis"
                className="w-full h-48 object-cover"
              />
              {showHeatmap && (
                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-multiply"
                     style={{ backgroundImage: `url(${heatmapOverlay})` }}>
                </div>
              )}
            </div>
            {showHeatmap && (
              <div className="mt-3 flex items-center space-x-2">
                <div className="flex space-x-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Original</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span>Modified</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>Suspicious</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Reverse Search Results */}
      <Card className="mt-6 shadow-card hover:shadow-hover transition-smooth">
        <CardHeader>
          <CardTitle>Reverse Image Search Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { source: "Twitter", date: "2024-03-14", similarity: "94%" },
              { source: "Instagram", date: "2024-03-10", similarity: "87%" },
              { source: "Facebook", date: "2024-03-08", similarity: "92%" }
            ].map((result, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:bg-accent/20 transition-smooth">
                <div className="aspect-video bg-muted rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{result.source}</span>
                    <Badge variant="outline" className="border-success text-success">
                      {result.similarity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Posted {result.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" className="border-accent-strong text-accent-strong hover:bg-accent">
              View All Results
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisResults;
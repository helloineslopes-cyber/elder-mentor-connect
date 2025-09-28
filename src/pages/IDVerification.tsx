import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowLeft, Upload, FileCheck, Shield, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const IDVerification = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const handleBack = () => {
    navigate("/learn-skills-selection");
  };
  const handleSkip = () => {
    navigate("/guidelines");
  };
  const handleContinue = () => {
    if (uploadedFile) {
      // TODO: Save verification document when Supabase is connected
      console.log("ID document uploaded:", uploadedFile);
      toast({
        title: "Documento carregado",
        description: "O seu documento foi carregado com sucesso. Será verificado em breve."
      });
    }
    navigate("/guidelines");
  };
  const handleFileSelect = (file: File) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Formato inválido",
        description: "Por favor, carregue um ficheiro JPG, PNG, WEBP ou PDF.",
        variant: "destructive"
      });
      return;
    }
    if (file.size > maxSize) {
      toast({
        title: "Ficheiro muito grande",
        description: "O ficheiro deve ter menos de 10MB.",
        variant: "destructive"
      });
      return;
    }
    setUploadedFile(file);

    // Create preview for images
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
    toast({
      title: "Ficheiro carregado",
      description: `${file.name} foi carregado com sucesso.`
    });
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };
  const removeFile = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted flex flex-col">
      {/* Header */}
      <div className="pt-8 pb-8 px-6">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" onClick={handleBack} className="mb-6 -ml-2" size="sm">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <ProgressBar currentStep={5} totalSteps={5} className="mb-8" />
        </div>
        
        <div className="text-center">
          
          <h1 className="text-3xl font-bold text-foreground mb-2">Verificação de identidade</h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Carregue um documento de identificação para verificar a sua conta. Este passo é opcional por agora.
          </p>
        </div>
      </div>

      {/* Upload Area */}
      <div className="flex-1 px-6 pb-8">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Carregue o seu documento</CardTitle>
            <p className="text-sm text-muted-foreground">
              Bilhete de identidade, carta de condução ou passaporte
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {!uploadedFile ? <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">
                  Arraste e solte o ficheiro aqui
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  ou clique para selecionar
                </p>
                <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={handleFileInputChange} className="hidden" id="file-upload" />
                <Button variant="outline" asChild>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Selecionar ficheiro
                  </label>
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  JPG, PNG, WEBP ou PDF (máx. 10MB)
                </p>
              </div> : <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <FileCheck className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">{uploadedFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={removeFile}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                {previewUrl && <div className="mt-3">
                    <img src={previewUrl} alt="Preview do documento" className="w-full h-32 object-cover rounded border" />
                  </div>}
              </div>}

            <div className="space-y-3">
              <Button onClick={handleContinue} size="full" disabled={!uploadedFile} className="w-full">
                Continuar com verificação
              </Button>
              
              <Button variant="outline" onClick={handleSkip} size="full" className="w-full">
                Saltar por agora
              </Button>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Os seus dados estão seguros e serão processados de acordo com a nossa política de privacidade.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default IDVerification;
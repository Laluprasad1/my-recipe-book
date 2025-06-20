
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Minus } from 'lucide-react';

interface ArrayFieldProps {
  label: string;
  items: string[];
  onItemChange: (index: number, value: string) => void;
  onAddItem: () => void;
  onRemoveItem: (index: number) => void;
  placeholder: string;
  useTextarea?: boolean;
  error?: string;
}

const ArrayField: React.FC<ArrayFieldProps> = ({
  label,
  items,
  onItemChange,
  onAddItem,
  onRemoveItem,
  placeholder,
  useTextarea = false,
  error,
}) => {
  return (
    <div>
      <Label>{label} *</Label>
      <div className="space-y-2 mt-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex-1">
              {useTextarea ? (
                <Textarea
                  value={item}
                  onChange={(e) => onItemChange(index, e.target.value)}
                  placeholder={`${placeholder} ${index + 1}`}
                  rows={2}
                />
              ) : (
                <Input
                  value={item}
                  onChange={(e) => onItemChange(index, e.target.value)}
                  placeholder={`${placeholder} ${index + 1}`}
                  className="flex-1"
                />
              )}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onRemoveItem(index)}
              disabled={items.length === 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onAddItem}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add {placeholder}
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default ArrayField;

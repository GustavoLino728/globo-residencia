interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function InputField({ 
  label, 
  type, 
  placeholder, 
  value, 
  onChange, 
  required = false 
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-white/80 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder={placeholder}
      />
    </div>
  );
}

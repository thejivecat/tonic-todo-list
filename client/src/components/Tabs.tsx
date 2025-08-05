import type { FC } from 'react';

interface TabsProps {
  activeTab: 'unfolding' | 'attained';
  onTabChange: (tab: 'unfolding' | 'attained') => void;
}

const Tabs: FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => onTabChange('unfolding')}
        className={`px-4 py-2 rounded font-medieval transition ${
          activeTab === 'unfolding'
            ? 'bg-purple-700 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        Unfolding
      </button>
      <button
        onClick={() => onTabChange('attained')}
        className={`px-4 py-2 rounded font-medieval transition ${
          activeTab === 'attained'
            ? 'bg-purple-700 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        Attained
      </button>
    </div>
  );
};

export default Tabs;
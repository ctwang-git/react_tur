import CameraIcon from '@mui/icons-material/Camera';
import PhotoIcon from '@mui/icons-material/Photo';
import StackedLineChart from '@mui/icons-material/StackedLineChart';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export const importList = [
    {
        icon: <CameraIcon/>,
        text: 'Camera',
        fn: 'todo1'
    },
    {
        icon: <PhotoIcon />,
        text: 'Image Import',
        fn: 'todo2'

    }
];



export const measureList = [
    {
        icon: <StackedLineChart/>,
        text: 'Line',
        fn: 'todo1'
    },
    {
        icon: <Grid3x3Icon />,
        text: 'Orthogonal',
        fn: 'todo2'

    },
    {
        icon: <PanoramaFishEyeIcon />,
        text: 'Circle',
        fn: 'todo3'
    },
    {
        icon: <DataUsageIcon />,
        text: 'Circle - two point',
        fn: 'todo3'
    },
    {
        icon: <DonutLargeIcon />,
        text: 'Circle - three point',
        fn: 'todo3'
    },
    {
        icon: <AutoFixHighIcon />,
        text: 'Eraser',
        fn: 'todo3'
    }
];

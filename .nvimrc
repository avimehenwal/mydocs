" Project specific conf file
let w:p_name = 'avimehenwal2'
let w:p_CWD = '$HOME/GITHUB/' . w:p_name

" TMUX + Project Commands
let w:t_name = w:p_name . ':' . 'DEV'
let w:t_base = '!tmux new-window -c ' . w:p_CWD . ' -n ' . w:t_name . ' '

" Project Commands
let w:p_dev_cmd = w:t_base . 'yarn run dev'

" Debugging Purposes Only
echomsg w:p_dev_cmd

" Start development server Hotkey <M-0> 
execute 'nnoremap <M-0> :' . w:p_dev_cmd . '<CR>'

" Optimize SVG images using SVGO
" svgo --input='bullet-journaling-system.svg' --pretty


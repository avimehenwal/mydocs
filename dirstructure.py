from graphviz import Digraph
import pydot
import os
import pdb

# root_dir = os.getcwd()
root_dir = '/home/avi/REPO/mydocs/docs'
print(root_dir)

dot = Digraph(comment='The Round Table', filename='cluster.dot')
dot.format = 'svg'
dot.engine = 'circo'
# dot.engine = 'neato'

dot.node_attr.update(style='filled', colorscheme='paired12')

# dot.node('A', color="1")
# dot.node('B', color="2")
# dot.node('L', 'Gallahad', color="3")

# dot.edge('A', 'B')
# dot.edge('A', 'L')
# dot.edge('B', 'L')


counter = 1
counter_stop = 12
nodes = []

def increment():
    global counter
    print('counter=', counter)
    if counter < 12:
        counter = counter + 1
        return str(counter)
    else:
        counter = 1
        return str(counter)

for root, dirs, f_names in os.walk(root_dir):
    if 'assets' in dirs:
        dirs.remove('assets')
    elif 'dist' in dirs:
        dirs.remove('dist')
    elif '.vuepress' in dirs:
        dirs.remove('.vuepress')


    root_trim = root.split('/')[-1]

    dot.node(root_trim, color=increment(), shape='triangle')
    print('ROOT', root_trim)

    for item in dirs:
        # dot.node(item, color=increment(counter))
        dot.node(item, color=increment(), shape='rectangle')
        dot.edge(root_trim, item, concentrate='true')
        print('DIR', counter, item)

    for item in f_names:
        dot.node(item, color=increment())
        dot.edge(root_trim, item, concentrate='true')
        print('FILE', counter, item)

    # dot.node(root, color="1")

    # for subdir in dirs:
    #     node = pydot.Node(subdir, style="filled", fillcolor="yellow")
    #     dot.node(node)
    #     edge = pydot.Edge(root.split('/')[-1], subdir)
    #     dot.edge(edge)

    # for file in files:
    #     node = pydot.Node(file, style="filled", fillcolor="orange")
    #     dot.node(node)
    #     edge = pydot.Edge(root.split('/')[-1], file)
    #     dot.edge(edge)

    # pdb.set_trace()
    # print('***', root, dirs, f_names)


print(dot.source)
dot.render(view=True)
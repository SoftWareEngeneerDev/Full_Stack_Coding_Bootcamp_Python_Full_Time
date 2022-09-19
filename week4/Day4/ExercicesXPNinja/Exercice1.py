def get_full_name(**vars):

    print(type(vars['last_name']))

    if locals(vars['last_name']):
        print(vars['first_name'] + vars['middle_name'] + vars['last_name'])
    else:
        print(vars['first_name'] + vars['last_name'])

get_full_name(first_name="Kagambega",last_name="Boukary")

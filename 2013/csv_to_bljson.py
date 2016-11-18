#!/usr/bin/env python
# -*- coding: utf-8 -*-

import csv
import json
import sys

def process_row(row, index):
    try:
        return row[index].encode("ascii","ignore")
    except:
        print row[index]

def make_dict(row):
    return {'site' : process_row(row, 0),
            'empresa': process_row(row, 1),
            'cnpj_cpf': process_row(row, 2),
            'situacao_site': process_row(row, 3),
            'data_inclusao': process_row(row, 4)}

if __name__ == '__main__':

    try:
        YEAR = sys.argv[1]
    except IndexError:
        print u'Qual ano da última lista?'
        sys.exit(0)

    print 'Ano da última lista: %s' % YEAR

    bljson = []

    print 'Lendo arquivo CSV: black_list_%s' % YEAR

    with open('black_list_%s.csv' % YEAR, 'rU') as bl:
        blreader = csv.reader(bl, dialect=csv.excel_tab, delimiter=';')
        for row in blreader:
            bljson.append(make_dict(row))

    print 'Gerando JSON de saida: black_list_%s' % YEAR

    with open('black_list_%s.json' % YEAR, 'w') as bljsonfile:
        json.dump(bljson, bljsonfile, ensure_ascii=False)

    print 'Feito!'
